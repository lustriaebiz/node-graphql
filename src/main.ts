import express          from 'express';
import express_graphql  from 'express-graphql';
import { buildSchema }  from 'graphql';
const app = express();

class Main {

    run(port: number) {

        const schema = buildSchema(`
            type Query {
                message: String
            }
        `);

        const root = {
            message: () => JSON.stringify(['jeruk', 'apple', 'manggo'])
        };

        app.use('/graphql', express_graphql({
            schema: schema,
            rootValue: root,
            graphiql: true
        }));

        app.listen(port, () => console.log(`listening on port: ${port}`));
        
    }

}

let main$ = new Main;
main$.run(2100);
