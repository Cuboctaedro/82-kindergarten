export const truncate = (text: string, limit: number, ending: string): string => {
    if (text) {
        if (text.length <= limit) {
            return text;
        }
        const truncated = text.substring(0, limit);
        const lastSpace = truncated.lastIndexOf(' ');
        return `${text.substring(0, lastSpace)}${ending}`;
    }
    return '';
};
