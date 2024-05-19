export const getProductImage = async (productId?: string) => {
  try {
    const response = await fetch(`http://localhost:5258/api/Product/GetImage/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const base64Image = await response.text();
    return base64Image;
  } catch (error) {
    console.error(error);
  }
};
