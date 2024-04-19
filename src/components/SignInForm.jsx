

import { Button,Card,CardContent,CardHeader,Input,Separator } from "./ui"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"

const formSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8)
})
const SignInForm = () =>{
    const {register,formState:{errors},reset} = useForm({resolver:zodResolver(formSchema)})
    return(
        <Card >
            <CardHeader>
                <h2 className="text-center text-2xl">Sign In</h2>
                <p className="text-center text-muted-foreground">
                    Sign in using your email and password
                </p>
                <Separator/>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <Input
                            {...register('email')} placeholder="name@example.com"
                        />
                        {errors['email'] && (
                            <div className="mt-2 text-sm text-red-500">
                                {errors['email'].message}
                            </div>
                        )}
                    </div>
                    <div>
                        <Input
                            {...register('password')} type="password"
                        />
                        {errors['password'] && (
                            <div className="mt-2 text-sm text-red-500">
                                {errors['password'].message}

                            </div>
                        )}
                    </div>
                    <Button>Sign In</Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default SignInForm