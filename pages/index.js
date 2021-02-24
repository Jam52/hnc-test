import Head from 'next/head';
import styles from './index.module.scss';
import useForm from '../lib/useForm';
import FormInput from '../components/FormInput';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/main');
  });

  const { input, handleChange, handleSubmit, errors } = useForm(
    logIn,
    validateInput,
  );

  function logIn() {
    if (
      (input.name !== undefined) & (input.email !== undefined) &&
      input.password !== undefined
    ) {
      router.push('/main');
    }
  }

  function validateInput(input) {
    let errors = {};
    if (!input.email) {
      errors.email = 'Please enter an Email';
    } else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        input.email,
      )
    ) {
      errors.email = 'Please enter a valid email.';
    }
    if (!input.password) {
      errors.password = 'Password is required';
    } else if (!/^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z]).*$/.test(input.password)) {
      errors.password =
        'Password must be 6 or more characters, and contain at least 1 letter and 1 number.';
    }
    if (!input.name) {
      errors.name = 'Please enter a Name';
    }

    return errors;
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>hcn test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.container}>
          <h1 className={styles.header}>Coastal Native</h1>
        </div>
      </header>

      <main>
        <div className={styles.container}>
          <form className={styles.form}>
            <feildset>
              <legend>Please Log In</legend>
              <FormInput
                for="name"
                type="text"
                input={input}
                handleChange={handleChange}
                errors={errors}
              />
              <FormInput
                for="email"
                type="email"
                input={input}
                handleChange={handleChange}
                errors={errors}
              />
              <FormInput
                for="password"
                type="password"
                input={input}
                handleChange={handleChange}
                errors={errors}
              />
            </feildset>
            <button
              type="submit"
              className={styles.submit}
              onClick={(event) => handleSubmit(event)}
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
