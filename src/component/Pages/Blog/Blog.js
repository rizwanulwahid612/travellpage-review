import React from 'react';
import { TabTitle } from '../../Generalfunction/Generalfunction';

const Blog = () => {
    TabTitle('Blog')
    return (
        <div className='mt-6 mb-6 ml-6 mr-6 '>
          
            <div tabIndex={0} className="mb-6 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.</p>
                </div>
            </div>
            <div tabIndex={0} className="mb-6 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.</p>
                </div>
            </div>
            <div tabIndex={0} className="mb-6 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.To learn NodeJS the most important thing you should know is JavaScript. Don't make the mistake to learn Node until or unless you do not have a good command of JavaScript. Whatever you will be building with NodeJS, you will be using a lot of JavaScript concepts.</p>
                </div>
            </div>
            <div tabIndex={0} className="mb-6 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;