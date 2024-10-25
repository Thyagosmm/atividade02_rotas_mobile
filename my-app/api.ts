import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Função para registrar um usuário
export const registerUser = async (
  name: string,
  cpf: string,
  email: string,
  password: string
) => {
  try {
    const response = await api.post("/users", { name, cpf, email, password });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Por favor, preencha o e-mail e a senha.");
  }

  try {
    const response = await api.get("/users", {
      params: { email, password },
    });

    if (response.data.length > 0) {
      return { message: "Login bem-sucedido!", user: response.data[0] };
    }

    throw new Error("Credenciais inválidas");
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

// Função para listar contatos
export const getContacts = async () => {
  try {
    const response = await api.get("/contacts");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter contatos:", error);
    throw error;
  }
};

// Função para adicionar contato
export const addContact = async (
  name: string,
  email: string,
  phone: string
) => {
  try {
    const response = await api.post("/contacts", { name, email, phone });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar contato:", error);
    throw error;
  }
};

// Função para editar contato
export const updateContact = async (
  id: string,
  name: string,
  email: string,
  phone: string
) => {
  try {
    const response = await api.put(`/contacts/${id}`, { name, email, phone });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar contato:", error);
    throw error;
  }
};

// Função para excluir contato
export const deleteContact = async (id: string) => {
  try {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir contato:", error);
    throw error;
  }
};
