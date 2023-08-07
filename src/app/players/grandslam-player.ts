import {GrandslamPlayerService} from './grandslam-player.service';
import {GrandslamPlayerV1Service} from './grandslam-player-v1.service'

export function grandslamPlayersFactory(version: string) {
    return () => {
        if(version === 'v1') {
            return new GrandslamPlayerV1Service();
        } else {
            return new GrandslamPlayerService();
        }
    }
}