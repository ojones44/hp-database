function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 text-black">
      <div>
        <p className='font-bold'>
          HP300 Database <br />
        </p>
        <p>Copyright © {year} - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
