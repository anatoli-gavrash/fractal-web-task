const enum Sex {
  man = 'man',
  woman = 'woman'
}

interface User {
  phone: string,
  email: string,
  nickname: string,
  firstname: string,
  lastname: string,
  sex: Sex
  advantages: [string?]
  checkbox: [number?]
  radio: ''
  about: ''
}

export const initialState: User = {
  phone: '',
  email: '',
  nickname: '',
  firstname: '',
  lastname: '',
  sex: Sex.man,
  advantages: [],
  checkbox: [],
  radio: '',
  about: ''
};
