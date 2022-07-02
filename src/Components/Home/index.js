import { Stack, Divider } from '@mui/material';
import './home.css';

function Home() {
    
    return <div className='home'>
        <div className="hero">
            <Stack direction='row' spacing={2} justifyContent='center' alignItems='center' divider={<Divider orientation='vertical' flexItem />}>
                <div className='container-left'>
                    <h1>Welcome to Quiniela Qatar 2022</h1>
                </div>
                <div className='container-right'>List of participants here</div>
            </Stack>
        </div>
        <div>more content</div>
    </div>
    
}

export default Home;