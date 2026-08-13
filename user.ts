interface Address {
  city: string;
  country: string;
}

interface Account {
  status: string;
  plan: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  address: Address;
  account: Account;
}

interface ContactSummary {
  email: string;
  phone: string | null;
}

const user: User = {
  id: 20,
  firstName: "Doubra",
  lastName: "Apresai",
  email: "apresaidoubra@gmail.com",
  phone: null,

  address: {
    city: "Et-Osa",
    country: "Nigeria",
  },

  account: {
    status: "active",
    plan: "pro",
  },
};

function getDisplayName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

function getLocation(user: User): string {
  return `${user.address.city}, ${user.address.country}`;
}

function getContactSummary(user: User): ContactSummary {
  return {
    email: user.email,
    phone: user.phone,
  };
}

function isAccountActive(user: User): boolean {
  return user.account.status === "active";
}

function createProfileSummary(user: User) {
  return {
    displayName: getDisplayName(user),
    location: getLocation(user),
    contact: getContactSummary(user),
    active: isAccountActive(user),
    plan: user.account.plan,
  };
}

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));

export {};