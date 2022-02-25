import * as yup from 'yup';
import { string } from 'yup';

const formSchema = yup.object().shape({
  name: string().min(2, 'name must be at least 2 characters')
});

export default formSchema;