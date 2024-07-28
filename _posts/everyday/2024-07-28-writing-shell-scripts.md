---
title: "Writing Shell Scripts"
tags: ["os"]
date: 2024/07/28
slug: 2024-07-28-writing-shell-scripts
---

A **Shell Script** is a file containing a series of commands.

The shell reads this file and carries out the commands as though they have been entered directly on the command line.

## Steps

To write a shell script, we can follow these three steps:
- Write a script.
- Make the script executable.
- Put the script somewhere the shell can find it.

## Formula

Below is a very simple format of a script. The first line `#!/bin/bash` should always be included within a script.

```bash
#!/bin/bash
# This is our first script.
echo 'Hello World!'
```

Next, we need to make sure the script is executable by giving it permission:

```bash
chmod 755 script_file_name
```

To execute it, we can use this command:

```bash
./script_file_name
```

But if we just want to use only the name like we have: `ls, pwd, echo...` we need to put the script into the `/bin`  directory.

We can see all possible bin directories by the **PATH** variable, and just need to add your `/bin` directory to the **PATH**:

```bash
[me@linuxbox ~]$ echo $PATH
/home/me/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr /games
```

## A real script

Below is an example of a real script that start the AWS Systems Manager (SSM) session:

```bash
#!/bin/bash

# Establish a connection to NatureEye DB
# Require AWS CLI to be installed

echo "This action requires AWS CLI to be installed"

if ! command -v aws &> /dev/null; then
    echo "AWS CLI could not be found. Please install it and configure your credentials."
    exit 1
fi

echo "Starting AWS SSM session..."

aws ssm start-session \
    --target i-856257283h \
    --document-name AWS-StartPortForwardingSessionToRemoteHost \
    --parameters '{"host":["test-host.90790ghioio.us-west-2.rds.amazonaws.com"],"portNumber":["5432"], "localPortNumber":["5432"]}'
```

We can use various techniques to write script such as: condition, looping, read input, selection input, optional parameters...


***Refs:***

[Book] The Linux Command Line: A Complete Introduction by _William E. Shotts Jr._

