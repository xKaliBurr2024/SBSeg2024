FROM kalilinux/kali-rolling

WORKDIR /exekaliburr

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt -q update -y && apt -q upgrade -y
RUN apt -q install -y ca-certificates
RUN apt -q install -y python3 python3-pip
RUN apt -q install -y figlet \
    host \
    nmap \
    dirb \
    whois \
    whatweb \
    dnsrecon \
    curl \
    dnsmap \
    gobuster

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

CMD ["python3", "api.py"]
