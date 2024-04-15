export const formatCurrency = (value, prefix, locale = 'es-ES') => {
    const formatter = new Intl.NumberFormat(locale, { useGrouping: true });
    const valueFormated = formatter.format(value)
    return `${prefix || ''}${valueFormated}`;
}