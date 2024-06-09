export const truncate = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

export const getMaxLength = (width: number, isGrid: boolean): number => {
    if (isGrid) {
        if (width < 756) {
            return 80
        } else if (width < 1024) {
            return 48
        } else {
            return 60
        }
    } else {
        if (width < 756) {
            return 28
        }
        if (width < 1024) {
            return 55
        } else {
            return Infinity
        }
    }
}


export const formatViewCount = (viewCount: number) => {
    if (viewCount >= 1_000_000_000) {
        return `${Math.floor(viewCount / 1_000_000_000)} млрд просмотров`
    } else if (viewCount >= 1_000_000) {
        return `${Math.floor(viewCount / 1_000_000)} млн просмотров`
    } else if (viewCount >= 1_000) {
        return `${Math.floor(viewCount / 1_000)} тыс. просмотров`
    } else {
        return `${viewCount} просмотров`
    }
}

export const createVideoLink = (id: string) => {
    return `https://www.youtube.com/watch?v=${id}`
}

