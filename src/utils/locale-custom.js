import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

const customLocale = {
    ...dayjs.Ls.vi,
    months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], // Tháng dạng số
};

dayjs.locale(customLocale);
export default dayjs;