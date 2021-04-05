import wayPointTypes from './waypoint.types';
import { fs,path,os } from '../../../nativeImports';

export const setWayPointPolygon = (polygon: any) => ({
    type: wayPointTypes.SET_POLYGON,
    payload: polygon
});

export const setWayPointPolygonNull = () => ({
    type: wayPointTypes.SET_POLYGON_NULL,
});

export const setWayPointPointCloud = (pointCloud: any) => ({
    type: wayPointTypes.SET_POINT_CLOUD,
    payload: pointCloud
});

export const setWayPointPointCloudNull = () => ({
    type: wayPointTypes.SET_POINT_CLOUD_NULL,
});

export const writeToFile = (geoJson: any, fileName: string) => {
    return (dispatch: any, getState: any) => {

        let pointData = JSON.stringify(geoJson);
        let homeDir = os.homedir();

        if(pointData) {
            fs.writeFile(path.join(homeDir,fileName),pointData,(err: any) => {
                if(err)
                    console.log(`Error ${err}`);
                
                console.log(`Written to file : ${homeDir}/${fileName}`);
            });
        }

    };
};

export const loadFromFile = (fileName: string, type: string) => {
    return async (dispatch: any) => {
        let homeDir = os.homedir();
        fs.readFile(path.join(homeDir,fileName),'utf8', (err, data) => {
            if(err)
                console.log(`Error in read ${err}`);
            let objectData = JSON.parse(data);
            switch(type) {
                case 'polygon': dispatch(setWayPointPolygon(objectData)); break;
                case 'pointCloud': dispatch(setWayPointPointCloud(objectData)); break;
            }
        });
    }
} 
