FROM python

WORKDIR /app

COPY * /app/

EXPOSE 8012

CMD ["gunicorn", "gogo:app","-b", "0.0.0.0:8012"]