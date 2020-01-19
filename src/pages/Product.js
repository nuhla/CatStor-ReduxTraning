import React from 'react';

export default function Product() {
  return (
    <div>
      <h1> Product</h1>
      <div className="row">
        <div className={'col-4'}>
          <div className="card">
            <img
              src="https://imgix.bustle.com/mic/45a1aaa7ba15f32f0a7b805eb6a36e5b1d28bc6227fc72e24bc32e355e418ee8.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                10 Beautiful Opening Lines of Books Will Remind You What
                Fantastic Writing Looks Like
              </h5>
              <p className="card-text">
                It's a truth universally acknowledged: An author's first line
                can make or break a book. Celebrated texts are often identified
                not only by their memorable characters, but by their
                legendary...
              </p>
              <a
                href="https://imgix.bustle.com/mic/45a1aaa7ba15f32f0a7b805eb6a36e5b1d28bc6227fc72e24bc32e355e418ee8.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
