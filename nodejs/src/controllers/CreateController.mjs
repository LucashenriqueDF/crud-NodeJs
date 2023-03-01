import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient

export class PostcorinthiansController{

    async post_corinthians(res, req){

        const corinthians = req.body;

            try {
                    const create_corinthians = await prisma.corinthians.create({
                        data:{
                            nome: corinthians.nome,
                            qnt_titles: corinthians.qtd_titles
                        }
                    })
                    
                    res.json(`corinthians create successfully: ${create_corinthians}`)
                    
                }catch(e) {
                    res.json("This brasieirao already exists")
        }
     }
}




        
  

