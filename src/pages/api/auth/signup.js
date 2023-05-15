
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema'
import { hash } from 'bcryptjs';

export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { username, email, password } = req.body;

        // check duplicate users
        const checkexisting = await Users.findOne({ email: email });
        console.log('checkexisting:' + checkexisting);
        if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

        const user = await Users.create({ username, email, password : await hash(password, 12)})

        if (user) { //created 
            res.status(201).json({ 
                status: "true",
                user: checkexisting
                // message: `New user ${email} created` 
            })
        } else {
            res.status(400).json({ message: 'Invalid user data received' })
        }

    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}