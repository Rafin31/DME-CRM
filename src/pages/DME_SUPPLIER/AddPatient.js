import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { React, useState } from 'react';
import { Alert, Button, Card, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Iconify from '../../components/iconify';
import { fDate } from "../../utils/formatTime";



export default function AddPatient() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [dbError, setDbError] = useState(false)
    const onSubmit = data => {
        const givenDate = new Date(data?.dob);
        const presentDate = new Date()
        if (givenDate > presentDate) {
            setDbError(true)
            return
        }
        data.dob = fDate(data.dob)
        setDbError(false)
        console.log(data)
        reset()
    };
    return (
        <>
            <Helmet>
                <title> Add Patient </title>
            </Helmet>
            <Container maxWidth="xl">
                <Typography variant="h5">Add Patient</Typography>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    style={{ minHeight: '100vh', marginTop: '40px' }}
                >
                    <Card sx={{ paddingY: 4, paddingX: 3 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid
                                container
                                rowSpacing={2}
                                columnSpacing={{ xs: 2, sm: 3, md: 5, lg: 5 }}
                            >
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("Fname", { required: "Field is required" })}
                                        error={errors.Fname && true}
                                        label="First Name*"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.Fname?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("Lname", { required: "Field is required" })}
                                        error={errors.Lname && true}

                                        label="Last Name*"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.Lname?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("userName", { required: "Field is required" })}
                                        error={errors.userName && true}

                                        label="User Name*"
                                        type="text"
                                        autoComplete="off"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.userName?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("email", { required: "Field is required" })}
                                        error={errors.email && true}

                                        label="Email*"
                                        autoComplete="false"
                                        type={'email'}
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.email?.message}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {...register("password",
                                            {
                                                required: "Field is required",
                                                minLength: { value: 8, message: "Password must be at last 8 characters" },
                                            }

                                        )}
                                        error={errors.password && true}

                                        label="Password*"
                                        type={'password'}
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.password?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel style={{ width: "auto", textAlign: "center", backgroundColor: "white" }} >Gender*</InputLabel>
                                        <Select
                                            variant="outlined"
                                            size="small"
                                            error={errors.gender && true}
                                            helpertext={errors.gender?.message}
                                            rows={2}
                                            defaultValue=""
                                            {...register("gender", { required: "Field is required" })}
                                        >
                                            <MenuItem value={"male"}>Male</MenuItem>
                                            <MenuItem value={"female"}>Female</MenuItem>
                                            <MenuItem value={"other"}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("dob", { required: "Field is required" })}
                                        error={errors.dob && true}

                                        label="Date of Birth*"
                                        onFocus={(e) => { (e.target.type = "date") }}
                                        onBlur={(e) => { (e.target.type = "text") }}
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.dob?.message}
                                    />
                                    {dbError && <Alert sx={{ py: 0 }} severity="error">Date can not be future!</Alert>}
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("weight", { required: "Field is required" })}
                                        error={errors.weight && true}

                                        type={'number'}
                                        label="Weight (lbs)*"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.weight?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("country", { required: "Field is required" })}
                                        error={errors.country && true}

                                        label="Country*"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.country?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("city", { required: "Field is required" })}
                                        error={errors.city && true}

                                        label="City*"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.city?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("state", { required: "Field is required" })}
                                        error={errors.state && true}

                                        label="State*"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.state?.message}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {...register("phoneNumber", {
                                            required: "Field is required",
                                            minLength: { value: 6, message: "Phone number should be at last 6 characters" },
                                        })}

                                        error={errors.phoneNumber && true}
                                        label="Phone Number*"
                                        type={"tel"}
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors?.phoneNumber?.message}

                                    />

                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        {...register("primaryInsurance", { required: "Field is required" })}
                                        error={errors.primaryInsurance && true}

                                        label="Primary Insurance*"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.primaryInsurance?.message}

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        {...register("secondaryInsurance", { required: "Field is required" })}
                                        error={errors.secondaryInsurance && true}

                                        label="Secondary Insurance*"
                                        fullWidth
                                        variant="outlined"
                                        helpertext={errors.secondaryInsurance?.message}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {...register("address", { required: "Field is required" })}

                                        label="Address"
                                        error={errors.address && true}
                                        fullWidth
                                        multiline
                                        helpertext={errors.address?.message}
                                        rows={4}
                                        variant="outlined" />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button type={"submit"} sx={{ width: "200px" }} size="medium" variant="contained" endIcon={<Iconify icon="eva:plus-fill" />}>Add</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Card>
                </Grid>
            </Container>
        </>
    );
};
