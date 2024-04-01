import CustomLink from '../../CustomLink';

const SomethingWentWrong = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Looks like something went wrong.</h2>
      <p>
        We have encountered an unexpected error while processing your request.
      </p>
      <div style={{ marginTop: '20px' }}>
        <CustomLink
          href="/"
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
          }}
        >
          Go Back
        </CustomLink>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
