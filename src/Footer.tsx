type footerProps = {
  copyright: string;
}

const Footer: React.FC<footerProps> = (props) => (
  <footer>Footer {props.copyright}</footer>
);

export default Footer;
