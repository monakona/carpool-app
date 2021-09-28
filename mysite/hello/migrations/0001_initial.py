# Generated by Django 3.2.7 on 2021-09-27 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DropOff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('home_adress', models.CharField(max_length=100)),
                ('email_address', models.CharField(max_length=50)),
                ('user_name', models.CharField(max_length=20)),
                ('phone_number', models.CharField(max_length=15)),
                ('user_type', models.CharField(choices=[('D', 'Driver'), ('S', 'Shopper')], max_length=1)),
            ],
        ),
    ]