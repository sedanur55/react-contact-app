import * as yup from 'yup';
import { object, string, number, date, InferType, ref } from 'yup';

const validations = yup.object().shape({
    email: yup.string().email('Geçersiz email').required('Zorunlu alan'),
    password: yup.string().min(5,'Parolanız en az  5 karakter olmalıdır.').required('Zorunlu alan'),
    passwordConfirm: yup.string().oneOf([yup.ref("password")],'Parolalar uyuşmuyor').required('Zorunlu alan'),
});

export default validations;