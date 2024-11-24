import ApiUrl from "../utils/api-url.js";
import api from "../utils/api.js";

export default class CustomerImageServices {
    /**
     * Upload an image for a customer.
     * @param {Object} data - The data for the request.
     * @param {number} data.id - The customer ID.
     * @param {string} data.type - The type of image.
     * @param {File} data.file - The image file to upload.
     * @returns {Promise} - The API response.
     */
    static uploadImage = ({id, type, file}) => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("type", type);
        formData.append("file", file);

        return api.post(`${ApiUrl.customerImage}/upload`, formData, {
            headers: {"Content-Type": "multipart/form-data"},
        });
    };

    /**
     * Get all images for a customer by ID.
     * @param {number} id - The customer ID.
     * @returns {Promise} - The API response with a list of images.
     */
    static getCustomerImages = (id) => {
        return api.get(`${ApiUrl.customerImage}/${id}`);
    };

    /**
     * Delete a customer image by ID.
     * @param {number} id - The image ID.
     * @returns {Promise} - The API response.
     */
    static deleteCustomerImage = (id) => {
        return api.delete(`${ApiUrl.customerImage}/${id}`);
    };
}
