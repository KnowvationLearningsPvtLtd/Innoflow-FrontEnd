"use client"

import React, { createContext, useContext, useState } from "react";

export type User = {
  name: string;
  email: string;
  username: string;
  company: string;
  bio: string;
};

const defaultUser: User = {
  name: "John Doe",
  email: "john.doe@example.com",
  username: "johndoe",
  company: "Acme Inc.",
  bio: "AI developer and workflow automation specialist."
};

const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
}>({
  user: defaultUser,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext); 