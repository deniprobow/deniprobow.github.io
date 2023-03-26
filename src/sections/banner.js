/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import DeniImg from 'assets/deni-foto.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {

  const handleClick = e => {
    e.preventDefault()
    location.href='https://drive.google.com/file/d/16yJQcVb1517wSX_HR2iAuKWETuHOzLYU/view?usp=sharing'
  }

  const contactMe = e => {
    e.preventDefault()
    location.href='https://www.linkedin.com/in/deni-saputra-2b1567114/'
  }
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Fullstack Developer Engineer
          </Heading>
          <Text as="p" variant="heroSecondary">
            Hardworker, friendly, teamwork orientation fullstack developer with variant tech skills like NodeJs/PHP for backend, Flutter for Mobile, Nextjs React/VueJs for frontend web app. 
          </Text>
          <Button onClick={handleClick.bind(handleClick)} variant="primary" sx={styles.mr4}>Download Resume</Button>
          <Button onClick={contactMe.bind(contactMe)}  variant="secondary">Contact Me</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={DeniImg} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  mr4:{
    marginRight : '20px'
  },
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['50%', '50%', '50%', null, '57%', '60%', '67%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      width: ['50%', '50%', '50%', null, '57%', '60%', '33%', '40%'],
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
