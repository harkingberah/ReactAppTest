function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear(); // Extract the current year
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
