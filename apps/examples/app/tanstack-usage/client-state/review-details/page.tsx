'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FormData } from './type';
import styles from '../page.module.css';
import { useRouter } from 'next/navigation';
import { BackButton, DocNotes, DocParagraph } from '@verizon-nextgen/shared/ui';
import { useRef } from 'react';

const ReviewDetails = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const errorLogRef: any = useRef(null);

  const logError = (msg: string) => {
    const msgElm = document.createElement('p');
    msgElm.innerHTML = msg;
    errorLogRef?.current?.appendChild(msgElm);
  };

  const retryHandler = (failureCount: number) => {
    if (failureCount === 0) {
      logError('Initial API call failed');
    }
    // Retry only 2 times
    if (failureCount < 2) {
      logError(`Retrying API call on failure...${failureCount + 1}`);
      return true;
    }
    return false;
  };

  const { data } = useQuery({
    queryKey: ['form-details'],
    queryFn: () => {
      return queryClient.getQueryData(['form-details']) as FormData;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (userDetails: FormData) => {
      logError('API calling...');
      const response = await fetch('https://your-api.com/users', {
        method: 'POST',
        body: JSON.stringify(userDetails),
      });
      return await response.json();
    },
    retry: retryHandler,
    onError: error => {
      logError('Error: API is not responding.');
      // Retry with adjusted parameters
      // console.error('Submit user details error:', error);
      // Handle error UI updates (e.g., display error message)
    },
    onSuccess: data => {
      // console.log('User details submitted successfully:', data);
      // Handle successful submission UI updates and potentially navigate
      //  queryClient.removeQueries({ queryKey: ['form-details'] });
      // router.push('/tanstack-usage/client-state');
    },
  });

  const handleConfirm = () => {
    if (!data) {
      return;
    }
    const userDetails = {
      name: data.name,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
    };

    /* 
      The mutation function you can call with variables to trigger the mutatio
      The variables object to pass to the mutationFn.
    */
    mutate(userDetails); // mutate(variabels)
  };

  const handleEdit = () => {
    router.push('/tanstack-usage/client-state/');
  };

  return (
    <>
      <BackButton />
      <h1 className="text-center">Review Your Details</h1>
      <div className={styles.mainContainer}>
        <div className={styles.reviewDetailContainer}>
          <div className={styles.infoSection}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <span id="name">{data?.name}</span>
          </div>
          <div className={styles.infoSection}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <span id="email">{data?.email}</span>
          </div>
          <div className={styles.infoSection}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Contact No.:
            </label>
            <span id="phoneNumber">{data?.phoneNumber}</span>
          </div>
          <div className={styles.infoSection}>
            <label htmlFor="address" className={styles.label}>
              Address:
            </label>
            <span id="address">{data?.address}</span>
          </div>
          <div className={styles.confirmEditButton}>
            <button className={styles.button} onClick={handleConfirm}>
              Confirm
            </button>
            <button className={styles.button} onClick={handleEdit}>
              Edit
            </button>
          </div>
          <code ref={errorLogRef} />
          <DocNotes>
            <DocParagraph>
              Intentionally, we are failing the API call on click of confirm
              button because we want to show you the implemented retry logic on
              API failure. As per the retry logic API will be trigger
              automatically two times when the initial API call will be fail on
              click of confirm button.
            </DocParagraph>
          </DocNotes>
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
