export const removeAccents = (text: string): string => {
    return text.replaceAll('ά', 'α').replaceAll('έ', 'ε').replaceAll('ή', 'η').replaceAll('ί', 'ι').replaceAll('ό', 'ο').replaceAll('ύ', 'υ').replaceAll('ώ', 'ω');
};
