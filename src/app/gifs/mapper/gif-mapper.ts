import { GifInterfaceObject } from "../../interface/gif-interface-object";

export class GifMapper {
    static mapGifItemtoGif(item: GifInterfaceObject): GifInterfaceObject {
        return {
            id: item.id,
            title: item.title,
            url: item.url
        }

    }

    static mapGifItemtoGifList(gifs: GifInterfaceObject[]): GifInterfaceObject[] {
        return gifs.map(gif => this.mapGifItemtoGif(gif));
    }
}