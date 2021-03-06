from time import time
from os.path import curdir
from clones.validation.arguments import RunArguments
from clones.validation.batch import BatchBenchmark

# ======================== DEFINE FUNCTIONALITY ===============================

def foo(job):
    """ Function applied to <job>. """
    pass
    # save benchmark
    #job.save(path)


# ======================== PARSE SCRIPT ARGUMENTS =============================

args = RunArguments(description='Batch benchmark arguments.')
job_path = args['path']

# ============================= RUN SCRIPT ====================================

start_time = time()

# run each simulation in job file
with open(job_path, 'r') as job_file:

    # run each simulation
    for path in job_file.readlines():

        # load benchmark job
        job = BatchBenchmark.load(path.strip())
        job.batch.root = curdir

        # DO STUFF (defined by <foo>)
        foo(job)

# print runtime to standard out
runtime = time() - start_time
print('BATCH COMPLETED IN {:0.2f}.\n'.format(runtime))
