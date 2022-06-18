import { UrlsInterface } from "../types/types"

export const saveImagesIntoLocalStorage = (urlsArray: UrlsInterface[] | string[]): void => {
    window.sessionStorage.setItem('unsplashApiImages', JSON.stringify(urlsArray));
}

export const loadImagesFromLocalStorage = () => { 
    return window.sessionStorage.getItem('unsplashApiImages');
}

export const saveKeywordImagesIntoLocalStorage = (urlsArray: UrlsInterface[], keyword: string) => {
    window.sessionStorage.setItem(keyword, JSON.stringify(urlsArray));
}

export const loadKeywordImagesFromLocalStorage = (keyword: string) => {
    return window.sessionStorage.getItem(keyword);
}