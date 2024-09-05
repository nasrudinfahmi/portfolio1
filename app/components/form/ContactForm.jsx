'use client';

import Input from '../input/Input';
import { useState } from 'react';
import Textarea from '../textarea/Textarea';
import UTILS from '@/app/utils';

function ContactForm() {
  const defaultValue = {
    first_name: {
      name: '',
      error: '',
    },
    last_name: {
      name: '',
      error: '',
    },
    email: {
      name: '',
      error: '',
    },
    subject: {
      name: '',
      error: '',
    },
    message: {
      text: '',
      error: '',
    },
  };
  const [datas, setDatas] = useState(defaultValue);

  const validateDatasInput = (field, fieldsValue = '') => {
    if (
      field !== 'first_name' &&
      field !== 'last_name' &&
      field !== 'email' &&
      field !== 'subject' &&
      field !== 'message'
    )
      return;

    const value = fieldsValue.trim();

    if (field === 'first_name' || field === 'last_name') {
      const fieldName = field === 'first_name' ? 'First name' : 'Last name';

      if (value === '') {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: `${fieldName} is required!` },
        }));
      } else if (value.length < 3) {
        setDatas((prev) => ({
          ...prev,
          [field]: {
            ...prev[field],
            error: `${fieldName} must be at least 3 characters.`,
          },
        }));
      } else {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: '' },
        }));
      }
    }

    if (field === 'email') {
      if (value === '') {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: 'Email is required!' },
        }));
      } else if (UTILS.validateEmail(value) === false) {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: 'Invalid email!' },
        }));
      } else {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: '' },
        }));
      }
    }

    if (field === 'subject') {
      if (value === '') {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: 'Subject is required!' },
        }));
      } else if (value.length < 3) {
        setDatas((prev) => ({
          ...prev,
          [field]: {
            ...prev[field],
            error: 'Subject must be at least 3 characters.',
          },
        }));
      } else {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: '' },
        }));
      }
    }

    if (field === 'message') {
      if (value === '') {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: 'Message is required!' },
        }));
      } else {
        setDatas((prev) => ({
          ...prev,
          [field]: { ...prev[field], error: '' },
        }));
      }
    }
  };

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value?.trim();
    validateDatasInput(key, value);
    setDatas((prev) => ({
      ...prev,
      [key]: { ...prev[key], name: value },
    }));
  };

  const handleInputBlur = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    validateDatasInput(key, value);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const form = document.getElementById('form-contact');

      for (const value of Object.values(datas)) {
        if (value.error) throw new Error('Data tidak valid!');
      }

      UTILS.sendEmail({
        firstname: datas.first_name.name,
        lastname: datas.last_name.name,
        subject: datas.subject.name,
        email: datas.email.name,
        message: datas.message.text,
      });

      form.reset();
      setDatas(defaultValue);
    } catch (error) {
      alert('Error: ada sesuatu yang salah.');
      console.log(error);
    }
  };

  return (
    <form
      id="form-contact"
      className="flex flex-col gap-2 w-full min-[900px]:w-4/5 p-7 mx-auto rounded-xl bg-white shadow-xl"
    >
      <Input
        datas={datas}
        setDatas={setDatas}
        name="first_name"
        idInput="fname"
        label="Your Firstname"
        idLabel="fname-label"
        ariaDescribedby="fname-described"
        placeholder="Firstname"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Input
        datas={datas}
        setDatas={setDatas}
        name="last_name"
        idInput="lname"
        label="Your Lastname"
        idLabel="lname-label"
        ariaDescribedby="lname-described"
        placeholder="Lastname"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Input
        type="email"
        datas={datas}
        setDatas={setDatas}
        name="email"
        idInput="email"
        label="Your Email"
        idLabel="email-label"
        ariaDescribedby="email-described"
        placeholder="Email"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Input
        datas={datas}
        setDatas={setDatas}
        name="subject"
        idInput="subject"
        label="Subject"
        idLabel="subject-label"
        ariaDescribedby="subject-described"
        placeholder="Subject"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Textarea
        datas={datas}
        name="message"
        idTextarea="message"
        label="Your Message"
        idLabel="message-label"
        ariaDescribedby="message-described"
        placeholder="Message"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button
        type="submit"
        aria-label="Submit Form"
        title="Submit Form"
        onClick={handleSubmit}
        className="mt-7 px-5 py-2 border-none bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-800 text-lg text-white font-medium rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
