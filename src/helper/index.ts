

export function shorted(value: string | null | undefined) {
    if (value)
        return `${value.substring(0, 4)}...${value.substring(value.length - 4)}`;
    else
    return ''

}