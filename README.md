# dimo-application

### Setting up GIT

Go to terminal and set your global configuration
~~~
git config --global user.name "FirstName LastName"
git config --global user.email "email@domain.com"
~~~

Add SSH keys for easy access to GitHub

~~~
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
~~~

Just press enter for all options. This will generate the public and private keys in folder `/Users/username/.ssh/id_rsa`
Copy the contents of the .pub file and paste it in slack team channel. This will get added to SSH keys.


### Cloning the repository

~~~
git clone git@github.com:paagalpandas/dimo-application.git
~~~

### Intellj importing project

Just select the root folder, intellij will automatically import all the modules.
Root folder here is "dimo-application"