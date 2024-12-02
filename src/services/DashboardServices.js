import api from '../utils/api';
import ApiUrl from '../utils/api-url';

class DashboardServices {
    getMonthlyIncome() {
        return api.get(ApiUrl.dashboard.income);
    }
    
    getRoomOccupancy() {
        return api.get(ApiUrl.dashboard.occupancy);
    }

    getDashboardStats() {
        return api.get(ApiUrl.dashboard.stats);
    }

    getInvoiceStats() {
        return api.get(ApiUrl.dashboard.invoices);
    }
}

export default new DashboardServices();