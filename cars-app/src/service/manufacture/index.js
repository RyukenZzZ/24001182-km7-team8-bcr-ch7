export const getManufactures = async (manufacture) => {
  const token = localStorage.getItem("token");
  let params = {};
  if (manufacture) {
    params.manufacture = manufacture;
  }
  let url =
    `${import.meta.env.VITE_API_URL}/manufactures` +
    new URLSearchParams(params);
  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }

  return result?.data;
};

export const getManufacturesById = async (id) => {
  const token = localStorage.getItem("token");
  let url = `${import.meta.env.VITE_API_URL}/manufactures/${id}`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }

  return result?.data;
};

export const getDetailManufactures = async (id) => {
  const token = localStorage.getItem("token");
  let url = `${import.meta.env.VITE_API_URL}/manufactures/${id}`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }

  return result?.data;
};

export const createManufacture = async (request) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Authentication token is missing.");

  const formData = new FormData();
  formData.append("name", request.name);
  if (request.logo) {
    formData.append("logo", request.logo);
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/manufactures`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: formData,
  });

  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }

  return result?.data;
};

export const updateManufacture = async (id, request) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("name", request.name);
  if (request.logo) {
    formData.append("logo", request.logo);
  }
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/manufactures/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "PUT",
      body: formData,
    }
  );

  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }

  return result?.data;
};
export const deleteManufacture = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/manufactures/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    }
  );
  // get data
  const result = await response.json();
  if (!result?.success) {
    throw new Error(result?.message);
  }

  return result?.data;
};
