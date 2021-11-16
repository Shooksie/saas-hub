import jwt from "jsonwebtoken";
import {DocumentNode} from "graphql";
import axios from "axios";
import {getSdk} from "../generated/graphql";

const TOKEN_KEY = 'sdkfjhsdkjhfsadkjhfgfhgfhgfhgfhg'

const generateAdminToken = () => {
    return jwt.sign({
        "https://hasura.io/jwt/claims": {
            'x-hasura-default-role': 'admin',
            "x-hasura-allowed-roles": ["admin"],
            "x-hasura-user-id":'00000000-0000-0000-0000-00000000',
        },
        user: '00000000-0000-0000-0000-00000000',
    }, TOKEN_KEY, {
        expiresIn: '2m'
    })
}

function fetchGraphQL<R, V>(
    operationsDoc: DocumentNode,
    variables: V,
    options: any
) {
    const token = generateAdminToken();

    return axios.post('http://host.docker.internal:8082/v1/graphql', {
            query: operationsDoc.loc?.source.body,
            variables,
        }, { headers: {
                'Authorization': `Bearer ${token}`
            }}
    ).then((result: { data: { data: any; }; }) => {
        return result.data?.data || result.data
    }).catch((e: any) => console.log('error', e));
}

// @ts-ignore
export const client = getSdk(fetchGraphQL)
