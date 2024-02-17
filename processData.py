def processCsv(f_path, numb, output_path):
    import pandas as pd
    import re

    # Read the contents of the file
    file_path = f_path
    phone_numbers = []
    messages = []
    dates = []  # List to store dates
    number = numb

    # Regex pattern to match date in the format "Jun 02, 2022 11:19:21 AM"
    date_pattern = re.compile(r'[A-Z][a-z]{2} \d{2}, \d{4} \d{2}:\d{2}:\d{2} [AP]M')

    # Iterate over each line in the file
    with open(file_path, "r", encoding="utf-8", errors="ignore") as file:
        current_date = None  # Initialize variable to store the current date
        for line in file:
            # No need to encode and decode the line again
            line = line.strip()

            # Check if the line contains a date
            match = date_pattern.search(line)
            if match:
                # Update current_date if a date is found
                current_date = match.group()

            # Check if the line contains the catchphrase
            if line.strip() == "Me":
                # Append the current date to dates list
                dates.append(current_date)
                # Get the content from the next line
                next_line = next(file, '').strip()
                messages.append(next_line)
                phone_numbers.append(False)

    # Create a pandas DataFrame
    df = pd.DataFrame({'Date': dates, 'Phone Number': phone_numbers, 'Message': messages})

    phone_numbers = []
    messages = []
    dates = []  # List to store dates

    # Regex pattern to match date in the format "Jun 02, 2022 11:19:21 AM"
    date_pattern = re.compile(r'[A-Z][a-z]{2} \d{2}, \d{4} \d{2}:\d{2}:\d{2} [AP]M')

    # Iterate over each line in the file
    with open(file_path, "r", encoding="utf-8", errors="ignore") as file:
        current_date = None  # Initialize variable to store the current date
        for line in file:
            # No need to encode and decode the line again
            line = line.strip()

            # Check if the line contains a date
            match = date_pattern.search(line)
            if match:
                # Update current_date if a date is found
                current_date = match.group()

            # Check if the line contains the catchphrase
            if line.strip() == number:
                # Append the current date to dates list
                dates.append(current_date)
                # Get the content from the next line
                next_line = next(file, '').strip()
                messages.append(next_line)
                phone_numbers.append(True)

    # Create a pandas DataFrame
    df1 = pd.DataFrame({'Date': dates, 'Phone Number': phone_numbers, 'Message': messages})

    # Assuming df1 and df2 are your two pandas DataFrames
    # Concatenate the two DataFrames
    comb = pd.concat([df, df1], ignore_index=True)

    comb['Date'] = pd.to_datetime(comb['Date'], format='%b %d, %Y %I:%M:%S %p')

    # Convert datetime values to concatenated integer without seconds and first two digits of the year
    comb['Date'] = comb['Date'].dt.strftime('%y%m%d%H%M').astype(float)

    # Sort the combined DataFrame based on the 'Date' category
    comb.sort_values(by='Date', inplace=True)

    # Reset index after sorting
    comb.reset_index(drop=True, inplace=True)

    comb['Order'] = range(1, len(comb) + 1)

    # Print the combined and sorted DataFrame
    comb.to_csv(output_path)

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/run-python-function', methods=['POST'])
def run_python_function():
    data = request.json  # Extract input data from JSON body of the HTTP request
    file_path = data['file_path']  # Access specific input parameter
    number = data['number']
    
    # Call your Python function with the received input
    result = processCsv(file_path, number, "output_file")
    
    return jsonify(result=result)  # Return result as JSON response

def your_python_function(input_parameter):
    # Your Python function logic here
    return processed_result

if __name__ == '__main__':
    app.run(debug=True)