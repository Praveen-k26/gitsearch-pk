import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import "jest-enzyme";
// import { MockedProvider } from 'react-apollo/lib/index';
import RepoListComponent from "../components/repoList/repoList.component";
import renderer from 'react-test-renderer';
import {QueryHandler,REPO_SEARCH} from './queryHandler';
import {shallow} from "enzyme";
import {findByTestAttr} from "../../test/testUtils";
import {useQuery} from "react-apollo";



const MOCK_DATA = [
    {
    request: {
        query:REPO_SEARCH,
        variable: {userID: "$userId"}
    },
    result:
{
    data: {
    user: {
        login: "Praveen-k26",
            id: "MDQ6VXNlcjMzMTM2ODA2",
            bio: "Senior Software Engineer..",
            avatarUrl: "https://avatars.githubusercontent.com/u/33136806?u=c955f1b584606b16a018f8263f0e0b63b4fbbc5a&v=4",
            company: null,
            email: "praveenn.ui@gmail.com",
            location: "NY/SLC",
            followers: {
            totalCount: 2
        },
        following: {
            totalCount: 0
        },
        twitterUsername: "praveen_koru",
            websiteUrl: null,
            repositories: {
            totalCount: 2,
                nodes: [
                {
                    "forkCount": 0,
                    "stargazerCount": 0,
                    "updatedAt": "2017-11-15T19:15:24Z",
                    "createdAt": "2017-11-15T19:15:22Z",
                    "description": null,
                    "name": "AngularTest",
                    "url": "https://github.com/Praveen-k26/AngularTest",
                    "viewerPermission": "ADMIN",
                    "id": "MDEwOlJlcG9zaXRvcnkxMTA4NzU2Nzg="
                },
                {
                    "forkCount": 0,
                    "stargazerCount": 0,
                    "updatedAt": "2018-03-30T03:49:15Z",
                    "createdAt": "2018-03-30T03:47:18Z",
                    "description": "A demo repository for My JSON Server (Alpha)",
                    "name": "demo",
                    "url": "https://github.com/Praveen-k26/demo",
                    "viewerPermission": "ADMIN",
                    "id": "MDEwOlJlcG9zaXRvcnkxMjczNzg1NTY="
                }
            ],
                "pageInfo": {
                "endCursor": "Y3Vyc29yOnYyOpHOB5ekfA=="
            }
        }
    }
}
}

}
]

const defaultProps = {success: false}

const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<RepoListComponent {...setUpProps}/>)
}

it("renders RepoListComponent query", async ()=>{
    const {getByText} = render(
        <MockedProvider>
            <RepoListComponent />
        </MockedProvider>
    );
    expect(getByText("Stars")).toBeInTheDocument();
})
