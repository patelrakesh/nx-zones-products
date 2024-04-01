'use client';

import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { BackButton, Input } from '@verizon-nextgen/shared/ui';
import styles from './page.module.css';
import { FormFields } from './type';

const ContactForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleForm = () => {
    queryClient.setQueryData(['form-details'], formData);
    router.push('/tanstack-usage/client-state/review-details');
  };

  useEffect(() => {
    const queryData = queryClient.getQueryData(['form-details']);
    if (typeof queryData === 'object' && queryData !== null) {
      const data: FormFields = queryData as FormFields;
      setFormData({
        name: data?.name,
        phoneNumber: data?.phoneNumber,
        email: data?.email,
        address: data?.address,
      });
    }
  }, []);

  return (
    <>
      <BackButton />
      <h1 className="text-center">Provide your details</h1>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <Input
            type="text"
            name="name"
            label="Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            type="tel"
            name="phoneNumber"
            label="Phone Number"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            type="email"
            name="email"
            label="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            rows={4}
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button className={styles.button} onClick={handleForm}>
          Review Your Details
        </button>
      </div>
    </>
  );
};

export default ContactForm;
