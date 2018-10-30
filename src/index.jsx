import * as React from 'react';
import { render } from '@react-pdf/renderer';
import { OkDocument } from './ok-document';
import { IssueDocument } from './issue-document';


render(<OkDocument />, `${__dirname}/../ok-document.pdf`);
render(<IssueDocument />, `${__dirname}/../issue-document.pdf`);
