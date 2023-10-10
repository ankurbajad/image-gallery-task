import React, {useEffect} from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryList } from '../../Redux/Slice/HomeSlice';
import PageLoading from '../../Components/PageLoading/PageLoading';
import { generateId } from '../../Utilis/Utilis';

const Home = () => {

    const dispatch = useDispatch()
    const {list, loading} = useSelector((state)=>{
        return{
            loading: state.home.loading,
            list: state.home.list,
        }
    })

    useEffect(()=>{
        dispatch(getGalleryList())
    },[])

    return(
        <Container className='container'>
            <PageLoading loading={loading}/>
            <Grid container spacing={2} sx={{marginBottom: 3}}>
                <Grid item xs={6} textAlign='left'>
                    <Typography variant="h5"><strong>Gallery</strong></Typography>
                    <Typography variant='body2'>Manage your Gallery(s)</Typography>
                </Grid>
            </Grid>
            <Grid  container spacing={2} sx={{marginBottom: 3}}>
                {list?.map((gallary, index)=>{
                    return(
                        <Grid 
                            item 
                            xs={12} 
                            md={6}
                            lg={4}
                            xl={4}
                            textAlign='left'
                            key={generateId()+index}
                        >
                            <Card >
                                <CardMedia
                                    component="img"
                                    alt={gallary.author}
                                    height="250"
                                    width='100%'
                                    image={gallary.download_url}
                                />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
export default Home;