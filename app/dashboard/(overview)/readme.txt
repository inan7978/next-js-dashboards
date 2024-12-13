the (overview) folder that this file and the loading.tsx and page.tsx files have been moved to was created because
the loading.tsx and page.tsx files were originally high in the directory than the customer or invoices views, so this folder
(overview) specifies that thes files should only apply to the dashboard page and nothing else

this is a Route Group

Route groups allow you to organize files into logical groups without affecting the URL path structure.

creating a new folder using parentheses will result in its name NOT being included in the URL.

So /dashboard/(overview)/page.tsx becoems /dashboard