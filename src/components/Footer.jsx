import { Box, Stack} from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
            <img src={Logo} alt="logo" style={{ width: '100px', height: '41px' }} />
            <p style={{color:'tomato', fontSize:'20px', fontWeight:'600', marginTop:'-20px'}}>IRON GYM</p>
        </Stack>
    </Box>
);

export default Footer;