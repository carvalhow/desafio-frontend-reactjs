const formatNegative = (value: string, type: string): string =>
  (type === 'outcome' ? ` - ${value}` : value).toString();

export default formatNegative;
