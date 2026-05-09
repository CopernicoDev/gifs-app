import { GifInterfaceObject } from "../interface/gif-interface-object";
import { Gif } from "../interface/gifs-interface-api";

export class GifMapper {
    static mapGifItemtoGif(item: Gif): GifInterfaceObject {
        return {
            id: item.id,
            title: item.title,
            url: item.images.downsized_large.url
        }
    }

    static mapGifItemtoGifList(gifs: Gif[]): GifInterfaceObject[] {
        return gifs.map(gif => this.mapGifItemtoGif(gif));
    }
}